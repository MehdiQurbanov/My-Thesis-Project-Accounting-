package com.mehdi.javabankingvilnius.service.impl;

import com.mehdi.javabankingvilnius.dto.*;

public interface UserService {

    BankResponse createAccount(UserRequest userRequest);

    BankResponse balanceEnquiry(EnquiryRequest enquiryRequest);

    String nameEnquiry(EnquiryRequest enquiryRequest);

    BankResponse creditAccount(CreditDebitRequest request);

    BankResponse debitAccount(CreditDebitRequest request);

    BankResponse login(LoginDto loginDto);

    BankResponse transferAccount(TransferRequest request);

}
