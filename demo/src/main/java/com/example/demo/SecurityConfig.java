package com.example.demo;

import org.springframework.context.annotation.*;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
@EnableWebMvc
public class SecurityConfig extends WebMvcConfigurerAdapter {

      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                    .allowedOrigins("*")
                    .allowedMethods("PUT", "GET", "PATCH", "DELETE");
      }
}
