import { currentUser } from '@clerk/nextjs/server';
import Product from './Product';

export default async function Dashboard() {
    const user = await currentUser();

    return (
        <>
            <Product amount={500} />
        </>
    );
}
