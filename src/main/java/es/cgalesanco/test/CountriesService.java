package es.cgalesanco.test;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.sun.jersey.core.header.MediaTypes;

@Path("/countries")
public class CountriesService
{
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public List<CountryDTO> getAllCountries() {
    return Arrays.asList(
      new CountryDTO("US", "United States"),
      new CountryDTO("ES", "Spain")
    );
  }
}
