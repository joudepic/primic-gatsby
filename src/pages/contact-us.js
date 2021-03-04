import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import RichText from '../components/richText'

export const query = graphql`
    {
    prismic {
        allContact_pages {
        edges {
            node {
                form_fields {
                    field_type
                    fields_name
                    required
                }
                title
                description
            }
        }
        }
    }
    }
`

const Form = styled.form`
    padding: 10px;
    background: #eee;
    margin-top: 20px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
`

const Button = styled.button`
    background: orange;
    color: white;
    cursor: pointer;
    padding: 4px 8px;
    box-shadow: none;
    border-radius:4px;
`

const contactUS = ({data}) => {

    return (
        <Layout>
            <RichText render={data.prismic.allContact_pages.edges[0].node.title} />
            <RichText render={data.prismic.allContact_pages.edges[0].node.description} />
            <Form 
            name="contact-us"
            method="POST"
            data-netlify="true"
            action="/contact-success">
                <input type="hidden" name="form-name" value="contact-us" />
                {data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
                    if(field.field_type === 'textarea'){
                        return(
                            <div key={i}>
                                <textarea placeholder={field.field_name} required={field.required === 'Yes'} />
                            </div>
                        )
                    }else{
                        return(
                            <div key={i}>
                                <input
                                    type={field.field_type}
                                    required={field.required === 'Yes'}
                                    placeholder={field.field_name}
                                />
                            </div>
                        )
                    }
                })}
                <Button type="submit">Submit</Button>
            </Form>
        </Layout>
    )
}

export default contactUS
