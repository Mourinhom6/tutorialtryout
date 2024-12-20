import {useRoute} from "&/ziggy"
import { useState } from "react";
import {Head, Link, usePage} from "@inertiajs/react"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Home({posts}){
    const route = useRoute();
    const{flash}=usePage().props;
    const{component}=usePage();

    const[flashMsg, setflashMsg] = useState(flash.message);
    const[flashSucs, setflashSucs] = useState(flash.success);

    setTimeout(() =>{
        setflashMsg(null);
    }, 3000);
    setTimeout(() =>{
        setflashSucs(null);
    }, 3000);

    return(
        <>
            <Head title={component}/>
            <h1 className="title">Hello</h1>
            {flashMsg && (<Snackbar open={Boolean(flashMsg)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}><Alert  icon={<CheckIcon fontSize="inherit" />} severity="error" sx={{ mt: 6 }}>{flashMsg}</Alert></Snackbar>)}
            {flashSucs && (<Snackbar open={Boolean(flashSucs)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}><Alert severity="success" sx={{ mt: 6 }}>{flashSucs}</Alert></Snackbar>)}

            {/* {flashMsg && <div className=" absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMsg}</div>}
            {flashSucs && <div className=" absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">{flashSucs}</div>} */}
            {/* <Link preserveScroll href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}</Link> */}

            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        {/* <Link href={`/posts/${post.id}`} className="text-link">
                            Read more...
                        </Link> */}


                        <Link href={route("posts.show", post)} className="text-link" >Read more...</Link>
                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    )
                )}
            </div>
        </>
    );
}
// Home.layout = page => <layout children={page}/>
