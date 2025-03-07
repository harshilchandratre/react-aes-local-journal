import React from 'react'

const IdentityCard = ({name, email, address}) => {
  return (
    <div>
      Name : {name}
      Email : {email}
      Address : {address}
    </div>
  )
}

export {IdentityCard}