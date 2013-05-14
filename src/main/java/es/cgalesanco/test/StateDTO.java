package es.cgalesanco.test;

public class StateDTO
{
  private String _id;
  private String _name;
  private String _countryId;

  public StateDTO() { }

  public StateDTO(String id, String name, String countryId) {
    _id = id;
    _name = name;
    _countryId = countryId;
  }

  public String getId() {
    return _id;
  }

  public void setId(final String id) {
    _id = id;
  }

  public String getName() {
    return _name;
  }

  public void setName(final String name) {
    _name = name;
  }

  public String getCountryId() {
    return _countryId;
  }

  public void setCountryId(final String countryId) {
    _countryId = countryId;
  }
}
