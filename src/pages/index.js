import Head from 'next/head';
import {NextSeo} from 'next-seo';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import AppLayout from '@/components/Layouts/AppLayout';
import axios from '@/lib/axios';
import { useState, useEffect } from 'react';
import BuildTeam from './home/BuildTeam';
import Landing from './home/Landing';
import Services from './home/Services';
import Testimonials from './home/Testimonials';
import SeoController from '@/lib/SeoController';

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    const seoData = {
        title: 'Tech Talent Recruitment and Acquisition',
        description:
            'Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization. ',
        canonical: 'https://www.analogueshifts.com',
        ogImage: 'a4.jpg',
    }

   
    return (
        <AppLayout>
            <SeoController seoData={seoData} />

            <Landing />

            <Services />

            <BuildTeam />

            <Testimonials />
        </AppLayout>
    )
}

