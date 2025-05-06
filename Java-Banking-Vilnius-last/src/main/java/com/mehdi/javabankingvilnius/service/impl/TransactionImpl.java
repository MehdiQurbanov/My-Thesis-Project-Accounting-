package com.mehdi.javabankingvilnius.service.impl;

import com.mehdi.javabankingvilnius.dto.TransactionDto;
import com.mehdi.javabankingvilnius.entity.Transaction;
import com.mehdi.javabankingvilnius.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class TransactionImpl implements TransactionService {


    @Autowired
    TransactionRepository transactionRepository;

    @Override
    public void saveTransaction(TransactionDto transactionDto) {
        Transaction transaction = Transaction.builder()
                .transactionType(transactionDto.getTransactionType())
                .accountNumber(transactionDto.getAccountNumber())
                .amount(transactionDto.getAmount())
                .status("succes")
                .build();
        transactionRepository.save(transaction);
        System.out.println("Transaction saved successfully");
    }
}
