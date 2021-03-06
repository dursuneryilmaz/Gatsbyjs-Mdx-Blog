import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterSocialWrapper,
  FooterWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook Logo" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="Twitter Logo" />
          </a>

          <a
            href="https://linkedin.com/in/dursuneryilmaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin Logo" />
          </a>

          <a
            href="https://instagram.com/dursun.eryilmaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="Instagram Logo" />
          </a>
        </FooterSocialIcons>
        <P size="xsmall" color="dark3">
          2020 © Dursun Eryılmaz. All rigths reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
