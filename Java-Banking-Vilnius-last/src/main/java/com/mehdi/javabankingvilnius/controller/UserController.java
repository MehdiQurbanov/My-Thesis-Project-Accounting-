package com.mehdi.javabankingvilnius.controller;


import com.mehdi.javabankingvilnius.dto.*;
import com.mehdi.javabankingvilnius.service.impl.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@Tag(name = "User Account Management APIs")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/login")
    @Operation(summary = "User login", description = "Login with username and password to get an authentication token")
    @ApiResponse(responseCode = "202", description = "Login successful")
    @ApiResponse(responseCode = "401", description = "Unauthorized - Invalid credentials")
    public BankResponse Login(@RequestBody LoginDto loginDto) {

        return userService.login(loginDto);

    }

    @PostMapping
    @Operation(summary = "Creat new user account", description = "Creating a new user and assigning an account ID")
    @ApiResponse(responseCode = "201", description = "Http status 201 CREATED")
    public BankResponse createAccount(@RequestBody UserRequest userRequest) {

        return userService.createAccount(userRequest);

    }

    @PostMapping("/balanceEnquiry")
    @Operation(summary = "Balance Enquiry", description = "Given an account number, check how much the user has")
    @ApiResponse(responseCode = "200", description = "Http status 200 SUCCESS")
    public BankResponse balanceEnquiry(@RequestBody EnquiryRequest request) {

        return userService.balanceEnquiry(request);

    }

    @GetMapping("/nameEnquiry")
    public String nameEnquiry(@RequestBody EnquiryRequest request) {

        return userService.nameEnquiry(request);

    }

    @PostMapping("/credit")
    public BankResponse creditAccount(@RequestBody CreditDebitRequest request) {

        return userService.creditAccount(request);

    }

    @PostMapping("/debit")
    public BankResponse debitAccount(@RequestBody CreditDebitRequest request) {

        return userService.debitAccount(request);

    }

    @PostMapping("/transfer")
    public BankResponse transfer(@RequestBody TransferRequest request) {

        return userService.transferAccount(request);

    }

}