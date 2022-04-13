package com.app.exception_handler;

import java.time.LocalDateTime;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom_exceptiom.AssetNotFoundException;
import com.app.dto.ErrorResponse;

@ControllerAdvice // its mandatory class level anno, to tell SC that following class will contain 
//global exc handling meth, offer a common ADVICE to controller layer
//regarding exc handling
//after adding this class : controller will contain: req handling logic
//class below will contain : exc handling logic --resulting into separation of concerns(=task)

public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		// Goal
		StringBuilder sb = new StringBuilder("Validation  error messages: ");
		ex.getBindingResult().getFieldErrors().forEach(fieldError -> sb.append(fieldError.getDefaultMessage()+" "));
		System.out.println(sb); 
		ErrorResponse resp = new ErrorResponse(sb.toString(), LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp);
			
	}
	
	//add new exception handler method to catch specially cutom exception
	@ExceptionHandler(AssetNotFoundException.class)
	public ResponseEntity<?> handleAssetNotFoundException(AssetNotFoundException e){
		System.out.println("In This handle Asset not found");
		
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse(e.getMessage()));
	}
	
	// for all other exc : add common exc handling method
	
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException rt){
		System.out.println("in handle runtime Exception "+rt);
		ErrorResponse resp = new ErrorResponse("Something went wrong "+rt.getMessage(),LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
	}
	
//	@ExceptionHandler(RuntimeException.class)
//	public ResponseDTO<?> runtimeHandleException(RuntimeException rt) {
//		System.out.println("in respone dto exception "+rt);
//		
//		return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR,"User not found ",null);
//	}
	
	
}
