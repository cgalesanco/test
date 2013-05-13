package es.cgalesanco.test;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import com.sun.jersey.api.core.PackagesResourceConfig;

@ApplicationPath("rest")
public class TestRestApp extends PackagesResourceConfig
{
  public TestRestApp() {
    super("es.cgalesanco.test");
  }
}
