// nested template strings
var node = Relay.QL`
  node(123) {
    ${Relay.QL`
      User {
        address {
          ${fragment},
        },
      }
    `}
  }
`;
