import Link from 'next/link'

const BasicDeck = ({deck}) => (
    <div>
        <Link href={`/edit/${deck.id}`}>
            <a>
                {deck.title}
            </a>
        </Link>
    </div>
)

export default BasicDeck