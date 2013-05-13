package es.cgalesanco.test;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CountryDTO
{
  public CountryDTO() {}

  public CountryDTO(String id, String name) {
    _id = id;
    _name = name;
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

  private String _id;
  private String _name;
}
