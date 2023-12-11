// import links from '../links'
// import fs from 'fs'
// import path from 'path'

const links = require('./links')
const fs = require('fs')
const path = require('path')

const generateSitemap = () => {
    // console.log(links)
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="https://www.sitemaps.org/schemas/sitemap/0.9
        https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${links['pages'].map(({ link }) => {
        return `
                <url>
                    <loc>https://txtutils.vercel.app${link}</loc>
                    <changefreq>weekly</changefreq>
                    <priority>0.9</priority>
                </url>
            `
    }).join('')}
    </urlset>
    `

    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap)
}

generateSitemap()