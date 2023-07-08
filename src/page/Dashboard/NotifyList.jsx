import styled from "styled-components/macro";

const NotifyList = () => {
    return ( 
        <Container>
            <div className="title">View all</div>
            
            <div className="ListContainer">
                <NotifyItem />
                <NotifyItem />
                <NotifyItem />
                <NotifyItem />
                <NotifyItem />
                <NotifyItem />
                <NotifyItem />
                <NotifyItem />
                <NotifyItem />
            </div>
        </Container>
    );
}
 
const NotifyItem = () => {

    return (
        <NotifyItemContainer >
            <div className="flex h-full w-full">
                <div className="avatar mr-3" />
                <span className="infor">
                    <span className="user">Canh Pham</span>
                    <span className="action w-full">Place a new der #123 Mỹ đình nam từ liêm cần tuyển thực tập lập trình reactjs , cv gửi về ctylhv1@gmail.com3</span>
                </span>
            </div>
        </NotifyItemContainer>
    )
}

export default NotifyList;

const Container = styled.div`
    width: 300px;
    height: 86%;
    /* background-color: #2a2a2d; */
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    overflow: hidden;   
    position: fixed;
    right: 0;

    .title {
        position: relative;
        padding-bottom: 10px;
        text-align: end;
        font-weight: 900;
        color: var(--first-color);
        cursor: pointer;
    
        &:hover {
            color: #3d1763;
        }
    }

    .ListContainer{
        height: 100%;
        overflow-y: scroll;
        width: 100%;
        padding: 6px;
    }
`

const NotifyItemContainer = styled.div`
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
    width: 100%;
    height: 100px;
    /* border-radius: 10px; */
    padding: 10px 5px;
    margin: 10px 0; 
    cursor: pointer;

    &:hover{
        background-color: #f1f1f1;
        border-radius: 10px;
    }

    & + & {
        padding-top: 10px;
        margin-top: 10px; 
    }

    .avatar {
        flex-shrink: 0;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid #6f6e6e;
        height: 65px;
        width: 65px;
        align-self: center;
    }

    .infor {
        overflow: hidden;
        width: auto;

        .user {
            font-weight: 600;
        }

        .action {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #484848;
        }

    }
`