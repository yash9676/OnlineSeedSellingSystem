package com.app.custom_exceptiom;

@SuppressWarnings("serial")
// custom exception if asset is not found
public class AssetNotFoundException extends RuntimeException {
	
	public AssetNotFoundException(String msg) {
		
		super(msg);
	}
}
