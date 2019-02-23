package ru.golov.polls.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import ru.golov.polls.property.SecurityProperties;

import java.util.Date;

@Component
public class JwtTokenProvider {

    private final SecurityProperties securityProperties;

    private final static Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);

    @Autowired
    public JwtTokenProvider(SecurityProperties securityProperties) {
        this.securityProperties = securityProperties;
    }

    public String generateToken(Authentication authentication) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        Date nowDate = new Date();
        Date expiredDate = new Date(securityProperties.getJwtExpirationTimeMs() + nowDate.getTime());

        return Jwts.builder()
                .setSubject(Long.toString(userPrincipal.getId()))
                .setIssuedAt(nowDate)
                .setExpiration(expiredDate)
                .signWith(SignatureAlgorithm.HS512, securityProperties.getJwtSecretKey())
                .compact();
    }

    public Long getUserIdFromJwt(String authToken) {
        Claims claims = Jwts.parser()
                .setSigningKey(securityProperties.getJwtSecretKey())
                .parseClaimsJws(authToken)
                .getBody();

        return Long.parseLong(claims.getSubject());
    }

    public boolean validateToken(String authToken) {
        try {
            Jwts.parser()
                    .setSigningKey(securityProperties.getJwtSecretKey())
                    .parseClaimsJws(authToken);
            return true;
        } catch (SignatureException ex) {
            logger.warn("Token validation fail {}: Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            logger.warn("Token validation fail {}: Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            logger.warn("Token validation fail {}: JWT token expired");
        } catch (UnsupportedJwtException ex) {
            logger.warn("Token validation fail {}: Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.warn("Token validation fail {}: JWT token string is null or empty");
        }

        return false;
    }
}
