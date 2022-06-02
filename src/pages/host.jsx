
import { userService } from "../services/user.service"


export const Host = () => {

    const loggedinUser = userService.getLoggedinUser()
    console.log(loggedinUser)

    return (<div className="stock-margin main-host-page">
        <div className="stock-margin-center">


            <section >
                hello {loggedinUser.fullName}!
            </section>
        </div>
    </div>
    )
}


