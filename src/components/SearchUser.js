import React from 'react'

function SearchUser() {

    return (
        <div className="align-items-center">
            <React.Fragment>

                <br />

                <div className="cards-list">
                    <div className="card 1" id="card-glow" style={{ borderRadius: '50px', backgroundImage: "url('https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')", }}>
                        <div className="card_image">
                            <img src="https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/> </div>
                        <div className="card_title title-white">
                         <div className="col"><h1>Thanks for coming!</h1></div>
                        </div>
                    </div>
                    <br />
                </div>
            </React.Fragment>
        </div>

    );
}

export default SearchUser;