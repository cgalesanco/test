package es.cgalesanco.test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.sun.jersey.core.header.MediaTypes;

@Path("/countries")
@Produces(MediaType.APPLICATION_JSON)
public class CountriesService
{
  @GET
  public List<CountryDTO> getAllCountries() {
    return Arrays.asList(
      new CountryDTO("US", "United States"),
      new CountryDTO("ES", "Spain")
    );
  }

  @GET @Path("{countryId}/states")
  public List<StateDTO> getCountryStates(@PathParam("countryId") String countryId) {
    List<StateDTO> result = new ArrayList<StateDTO>();
    if ("ES".equals(countryId)) {
      result.add(new StateDTO("ES:LO","La Rioja",countryId));
      result.add(new StateDTO("ES:M", "Madrid", countryId));
    } else if ("US".equals(countryId)) {
      result.add(new StateDTO("US:CA","California",countryId));
      result.add(new StateDTO("US:DE", "Delaware", countryId));
    }
    return result;
  }
}
