const queryOrdersGraphql = `{
    orders (first:30,sortKey:CREATED_AT,reverse:true){
      edges {
        node {
          id
          createdAt
          billingAddress{
            firstName
            city
            country
          }
          lineItems (first:1){
            edges {
              node {
                product{
                  id
                }
                title
                image{
                  src
                }
              }
            }
          }
        }
      }
    }
  }`;

export default queryOrdersGraphql;
