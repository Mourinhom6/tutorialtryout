import { Head, useForm } from "@inertiajs/react";
import Button from '@mui/material/Button';
import {useRoute} from "&/ziggy"

export default function Create({post}){
    const route = useRoute();

    const{ data, setData, put, errors, processing} = useForm({
        body: post.body,
    });
    console.log(useForm());
    function submit(e){
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route("posts.update", post));
    }
    return(
        <>
            <Head title='Edit'/>
            <h1 className="title">Edit the post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && '!ring-red-500'}
                    ></textarea>

                    {errors.body && <p className="error">{errors.body}</p>}

                    <Button disabled={processing} type="submit" variant="contained" sx={{ mt: 2 }}>Update Post</Button>

                    {/* <button className="primary-btn mt-4" disabled={processing}>Update Post</button> */}
                </form>
            </div>
        </>
    )
}
