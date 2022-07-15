import React from 'react'
import './FeaturedUser.css'
const FeaturedUser = ({
    nickname,
    avatar,
}) => {
    return (
        <article className="featured-user">
            <div>
                <div className="img-user">
                    <div className="user-avatar">
                        <div className="img-content">
                            <img src="https://zfmedia.blob.core.windows.net/profiles/8095191057282771-istockphoto-1211385262-612x612.jpg" alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
            <p className="nickname">
                <span className="block"></span>
                <div className="nickname-data">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 18 18" className="svg-icon s-mr-05" id="" fill="currentColor" title=""><path d="M16.75 9C16.75 7.4672 16.2955 5.96882 15.4439 4.69433C14.5923 3.41985 13.3819 2.42652 11.9658 1.83994C10.5497 1.25336 8.99141 1.09988 7.48805 1.39892C5.9847 1.69795 4.60378 2.43607 3.51993 3.51992C2.43607 4.60378 1.69795 5.9847 1.39892 7.48805C1.09988 8.99141 1.25336 10.5497 1.83994 11.9658C2.42652 13.3819 3.41986 14.5923 4.69434 15.4439C5.96882 16.2955 7.4672 16.75 9 16.75C11.0554 16.75 13.0267 15.9335 14.4801 14.4801C15.9335 13.0267 16.75 11.0554 16.75 9Z" fill="#AEBECD" strokeWidth="1.5"></path><path d="M9.00092 3.94426L10.4884 6.94901L13.6647 7.44426L11.4089 9.78313L12.1089 12.8885L9.00092 11.5349L5.89205 12.8903L6.59206 9.78488L4.3363 7.44601L7.51256 6.95076L9.00092 3.94426Z" fill="#E8E8E8"></path></svg>
                    <span>Maicol Manuel orosco vasquez</span>
                </div>
            </p>
        </article>
    )
}

export default FeaturedUser
