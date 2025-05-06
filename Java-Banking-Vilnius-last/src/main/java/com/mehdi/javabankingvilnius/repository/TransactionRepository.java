package com.mehdi.javabankingvilnius.repository;

import com.mehdi.javabankingvilnius.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, String> {
}
