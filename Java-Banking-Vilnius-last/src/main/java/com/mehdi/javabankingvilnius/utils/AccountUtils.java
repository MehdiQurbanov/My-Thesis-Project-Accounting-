package com.mehdi.javabankingvilnius.utils;

import java.time.Year;

public class AccountUtils {


    public static final String ACCOUNT_EXISTS_CODE = "001";
    public static final String ACCOUNT_EXISTS_MESSAGE = " This user already has an account created! ";
    public static final String ACCOUNT_CREATION_SUCCESS = "002";
    public static final String ACCOUNT_CREATION_MASSAGE = "Account has been successfully created!";
    public static final String ACCOUNT_NOT_EXISTS_CODE = "  Account not exist";
    public static final String ACCOUNT_NOT_EXISTS_CODE_MESSAGES = "  Account not exist";
    public static final String ACCOUNT_FOUND_CODE = "  ACCOUNT CODE";
    public static final String ACCOUNT_FOUND_SUCCESS = "  ACCOUNT SUCCESS";
    public static final String ACCOUNT_CREDITED_SUCCESS = "Account credited";
    public static final String ACCOUNT_CREDITED_SUCCESS_MESSAGE = " User Account created";
    public static final String INSUFFICIENT_BALANCE_CODE = "007";
    public static final String INSUFFICIENT_BALANCE_MESSAGE = "Insufficient Balance";
    public static final String ACCOUNT_DEBITED_SUCCESS = "Account debited";
    public static final String ACCOUNT_DEBITED_SUCCESS_MESSAGE = "Account debited successfully";
    public static final String TRANSFER_SUCCESSFUL_CODE = "008";
    public static final String TRANSFER_SUCCESSFUL_MESSAGE = "Transfer successfully";


    public static String generateAccountNumber() {

        /**
         * 2025 +randomSixDigits
         */
        Year currentYear = Year.now();
        int min = 100000;
        int max = 999999;

        // generate a random number  beetween  min and max
        int randNumber = (int) Math.floor(Math.random() * (max - min + 1) + min);

        // convert the current and randomNumber to strings, then concatenate
        String year = String.valueOf(currentYear);
        String randomNumber = String.valueOf(randNumber);
        StringBuilder accountNumber = new StringBuilder();
        return year + randomNumber;

    }

}
