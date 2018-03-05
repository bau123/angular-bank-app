package com.qa.intergration;

import javax.inject.Inject;
import javax.ws.rs.*;

import org.apache.log4j.Logger;

import com.qa.service.business.AccountService;

@Path("/account")
public class AccountEndpoint {

	private static final Logger LOGGER = Logger.getLogger(AccountEndpoint.class);

	@Inject
	private AccountService service;

	@Path("/json")
	@GET
	@Produces({ "application/json" })
	public String getAllAccounts() {
		LOGGER.info("AccountEndpoint + getAllAccounts");
		return service.getAllAccounts();
	}

	@Path("/json")
	@POST
	@Produces({ "application/json" })
	public String addAccount(String account) {
		LOGGER.info("AccountEndpoint + addAccount");
		return service.addAccount(account);
	}

	@Path("/json/{id}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteAccount(@PathParam("id") Long id) {
		LOGGER.info("AccountEndpoint + deleteAccount");
		return service.deleteAccount(id);

	}

	@Path("/json/")
	@PUT
	@Produces({ "application/json" })
	public String updateAccount(String account) {
		LOGGER.info("AccountEndpoint + updateAccount");
		return service.updateAccount(account);

	}
	public void setService(AccountService service) {
		LOGGER.info("AccountEndpoint + setService");
		this.service = service;
	}

}
