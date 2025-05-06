package com.mehdi.javabankingvilnius.service.impl;

import com.mehdi.javabankingvilnius.dto.EmailDetails;

public interface EmailService {
    void sendEmailAlert(EmailDetails emailDetails);

    void sendEmailWithAttachment(EmailDetails emailDetails);
}
