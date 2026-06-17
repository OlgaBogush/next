import CustomLink from "../components/CustomLink"

import MainContainer from "../components/MainContainer"

const Users = ({ users }) => {
  return (
    <MainContainer>
      <h1>List of users</h1>
      {users.map(({ id, name }) => (
        <CustomLink key={id} text={name} customTo={`/users/${id}`} />
      ))}
    </MainContainer>
  )
}

export default Users

export const getStaticProps = async (context) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  return { props: { users } }
}
