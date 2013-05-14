package es.cgalesanco.test;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import com.sun.jersey.api.core.PackagesResourceConfig;
import com.sun.jersey.api.json.JSONConfiguration;

@ApplicationPath("rest")
public class TestRestApp extends PackagesResourceConfig
{
  public TestRestApp() {
    super("es.cgalesanco.test");
    getFeatures().put(JSONConfiguration.FEATURE_POJO_MAPPING, true);
  }
}
