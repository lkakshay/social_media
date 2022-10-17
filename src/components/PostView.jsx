
import { Post } from "./PostCard"
export const Feed=()=>{
    let array=[1,2,3,4,]
    return (
        <div className="feed">
            {array.map(()=>{
                return <Post/>
            })}

        </div>
    )
}