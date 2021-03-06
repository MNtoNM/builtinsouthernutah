import styled from 'styled-components';

const PersonDetailStyles = styled.div`
        @media(max-width: 56.25rem) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

    display: flex;
    width: 100%;
    .social-links {
        display: flex;
        justify-content: center;
        margin: 0;
        /* height: 50px; */
    }
    .person-detail-left, .person-detail-right {
        display: flex;
        flex-direction: column;
    }
    .social-logo a img {
        width: 30px;
        padding: 10px;
        transition: .3s;

        &:hover {
            margin-top: 10px; 
        }
    }

    .person-detail-right {
        align-items: center;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }

    .user-description {
        margin-top: 2rem;
    }
        /* display: flex;   
        justify-content: space-around; 

        @media(max-width: 56.25rem) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

    .person-detail-left, .person-detail-right {
        display: flex;
        flex-direction: column;
    }
    .person-detail-left user-image-box {
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .person-detail-right {
        width: 70%;
        border: 1px solid black;
        border-radius: 10px;
        margin-left: 4rem;
        margin-right: 4rem;
        padding: 1.5rem;
    }

    .person-detail-buttons {
        display: flex;
        justify-content: flex-end !important;
    }

    .edit-profile {
        cursor: pointer;
        margin-right: 1rem;
        padding: 1rem;
    }

    .delete-profile {
        cursor: pointer;
        margin-left: 1rem;
        margin-right: 0;
        padding: 1rem;
    }

    .user-name {
        align-items: center;
    }
    .user-title {
        font-size: 3rem;
    }
    .user-description {
        font-size: 2rem;
        padding: 20px 70px;
        margin: 0 auto;
				text-align: left;
				
				@media(max-width: 37.5rem) {
					padding: 0;
				}
    }

    .social-logo a img {
        width: 30px;
        padding: 10px;
        transition: .3s;

        &:hover {
            margin-top: 10px;
            
        }
    }
    .social-url {
        font-size: 2rem;
    } */
`;

export default PersonDetailStyles;