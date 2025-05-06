package com.mehdi.javabankingvilnius;

import io.swagger.v3.oas.annotations.ExternalDocumentation;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = " The Java Banking Vilnius Application", description = "Backend REST APIs for TJA Bank", version = "v1.0", contact = @Contact(name = "Mehdi Qurbanov", email = "metiy1994@gmail.com", url = "https://github.com/MehdiQurbanov/vilnius_bank_app"), license = @License(name = " The Java Banking Vilnius", url = "https://github.com/MehdiQurbanov/vilnius_bank_app")), externalDocs = @ExternalDocumentation(description = "The Java Banking Vilnius App Documentation", url = "https://github.com/MehdiQurbanov/vilnius_bank_app"))
public class JavaBankingVilniusApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaBankingVilniusApplication.class, args);
    }

}
