
type Link ={
    label:string;
    url: string
}

const LINKS: Link[] =[
    {
        label:'Twitter',
        url:'https://twitter.com/N4Twar'
    }
]
export const Links = () => {
        return (
            <>
            {LINKS.map(link=>(
                <a key={link.label} href={link.url}>{link.label}</a>
            ))}
            </>
              
        );
}