import React from 'react'
import { connect } from 'react-redux'
import ProfileCard, { User } from '../components/Authentication/ProfileCard'
import Header from '../components/Header'
import Container from '../shared/Container'
import withPermition from '../utils/HOC/withPermition'

declare interface ProfileViewProps {
    user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {
    return <>
        <Header title="AlgaStock" />
        <Container>
            <div style={{
                display:'flex',
                justifyContent:'center'
            }}>

                <ProfileCard user={props.user} />
            </div>
           
        </Container>
        

    </>
}

const mapStateToProps = () => ({
    user: {
        name: 'Cristiano Souza',
        email: 'cristianoalmeida.souza@gmail.com'
    }
})
export default connect(mapStateToProps)(
    withPermition(['admin', 'customer'], '/')(ProfileView)
)


