import styled from "styled-components";

import { DataWrapper, DataList, ListItem, Title, Content } from "./IPData.styles"

function IPData ({IPinfo}) {
  
  return (
      <DataWrapper>
        {IPinfo && 
          <DataList>
            <ListItem>
              <Title>IP Address</Title>
              <Content>{IPinfo.ip}</Content>
            </ListItem>
            <ListItem>
              <Title>Location</Title>
              <Content>{IPinfo.location}</Content>
            </ListItem>
            <ListItem>
              <Title>Timezone</Title>
              <Content>UTC {IPinfo.tz}</Content>
            </ListItem>
            <ListItem>
              <Title>ISP</Title>
              <Content>{IPinfo.isp}</Content>
            </ListItem>
          </DataList> }
      </DataWrapper> 
  )
}

export default IPData;