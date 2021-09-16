import React from 'react'
import axios from 'axios'
import access_token from '../../access_token/access.json'
import { useQuery } from 'react-query'

const BASE_URL = "https://graph.instagram.com"

export default function Home() {

    const instaFeed = useQuery(["instafeed", access_token.user_id], async() => {
        const res = await axios.get(BASE_URL + `/me/media?fields=media_url,caption,username&access_token=${access_token.access_token}`);
        console.log(res.data)
        return res.data;
    })

    return (
        <div>
        </div>
    )
}
