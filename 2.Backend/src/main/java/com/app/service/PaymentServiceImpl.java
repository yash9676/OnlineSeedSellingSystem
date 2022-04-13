package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.OrderRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.dto.PaymentDTO;
import com.app.pojos.Order;
import com.app.pojos.Payment;
import com.app.pojos.User;

@Service
@Transactional
public class PaymentServiceImpl implements IPaymentService {

	@Autowired 
	private PaymentRepository paymentRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private OrderRepository orderRepo;
	
	@Override
	public String savePayment(PaymentDTO p) {
		
		User user = userRepo.findById(p.getUid()).orElseThrow(()-> new RuntimeException("User not found "+p.getUid()));
		Order order = orderRepo.findById(p.getOid()).orElseThrow(()-> new RuntimeException("order not found "+p.getOid()));
		
		Payment payment = new Payment();
		payment.setAccountHolderName(p.getAccName());
		payment.setCardNumber(p.getCardNumber());
		payment.setOrder(order);
		payment.setUserId(user);
		payment.setTotalAmount(p.getTotalAmount());
		paymentRepo.save(payment);
		return payment.getAccountHolderName();
	}

}
