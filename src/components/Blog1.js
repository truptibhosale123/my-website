import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const BlogContainer = styled.div`
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 24px;
    padding: 40px;
    max-width: 1200px;
    margin-left: 30px;
    border-radius: 10px; /* Rounded corners for the grid container */
    margin-top: 60px;
    overflow-y: auto; 
`;

const Subtitle = styled.h2`
    font-size: 1.8rem;
    color: black;
    margin-top: 20px;
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    color: navyblue;
    margin-bottom: 10px;
`;

function Blog1  () {
    return (
        <BlogContainer>
           <Header>Why Climb a Mountain?</Header>
<Paragraph>Climbing a mountain is a powerful experience that offers a combination of physical, mental, and spiritual benefits. Here are some key motivations for climbing a mountain:</Paragraph>

<Subtitle>1. Personal Challenge and Achievement</Subtitle>
<Paragraph>Mountains offer a physical and mental challenge, pushing climbers to go beyond their limits. Reaching the summit brings a profound sense of accomplishment.</Paragraph>

<Subtitle>2. Connection with Nature</Subtitle>
<Paragraph>Climbing allows you to experience nature in its rawest form, offering solitude, peace, and a deeper connection to the environment.</Paragraph>

<Subtitle>3. Physical Health and Fitness</Subtitle>
<Paragraph>Mountain climbing is an excellent full-body workout that enhances cardiovascular health, builds muscular strength, and improves endurance.</Paragraph>

<Subtitle>4. Mental Clarity and Focus</Subtitle>
<Paragraph>The mental focus required in climbing helps clear your mind of daily stresses, leading to greater mindfulness and mental resilience.</Paragraph>

<Subtitle>5. Adventure and Exploration</Subtitle>
<Paragraph>Mountains are a gateway to adventure. Climbing is an opportunity to explore new environments and discover new aspects of yourself.</Paragraph>

<Subtitle>6. Building Relationships</Subtitle>
<Paragraph>Climbing with a team builds strong bonds, requiring teamwork and shared goals, which often lead to lasting relationships.</Paragraph>

<Subtitle>7. Spiritual Fulfillment</Subtitle>
<Paragraph>For many, climbing a mountain offers spiritual meaning, providing time for reflection and a sense of connection to something greater.</Paragraph>

<Subtitle>8. Overcoming Fear</Subtitle>
<Paragraph>Climbing offers a chance to confront personal fears, particularly the fear of heights, empowering climbers and increasing confidence.</Paragraph>

<Subtitle>9. Simplicity and Focus</Subtitle>
<Paragraph>Life on the mountain is stripped down to essentials, offering a break from the complexities of everyday life and a focus on the journey itself.</Paragraph>

<Subtitle>10. The Sense of Freedom</Subtitle>
<Paragraph>Climbing breaks the routine and offers the exhilarating sense of freedom, surrounded by vast landscapes and limitless horizons.</Paragraph>

        </BlogContainer>
      );
    };


export default Blog1;