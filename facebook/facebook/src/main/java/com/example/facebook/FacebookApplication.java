package com.example.facebook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FacebookApplication {

    public static void main(String[] args) {
        System.out.println("Hello World!");
        SpringApplication.run(FacebookApplication.class, args);
        System.out.println("Bye World!");
    }

}
