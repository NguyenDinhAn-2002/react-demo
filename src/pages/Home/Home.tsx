import { useAuth } from '../../contexts/AuthContext';

const Home = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Xin chào, {user?.username}!</h1>
        </div>
    )
}

export default Home;