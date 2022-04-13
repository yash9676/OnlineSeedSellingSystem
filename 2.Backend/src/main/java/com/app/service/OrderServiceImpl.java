package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.OrderRepository;
import com.app.dao.UserRepository;
import com.app.dto.OrderDTO;
import com.app.pojos.Order;
import com.app.pojos.User;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService {

	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public Order saveOrder(OrderDTO transientOrder) {
		
		User user = userRepo.findById(transientOrder.getUid()).orElseThrow(()-> new RuntimeException("User not found"));
		Order order = new Order();
		order.setDeliveryOrderDate(transientOrder.getDdate());
		order.setOrderDate(transientOrder.getOdate());
		order.setProductId(transientOrder.getPid());
		order.setTotalPrice(transientOrder.getTotalPrice());
		order.setUserId(user);
		
		return orderRepo.save(order);
	}

}
