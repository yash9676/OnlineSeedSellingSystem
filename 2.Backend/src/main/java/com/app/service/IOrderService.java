package com.app.service;

import com.app.dto.OrderDTO;
import com.app.pojos.Order;

public interface IOrderService {
	
	Order saveOrder(OrderDTO transientOrder);
	
}
