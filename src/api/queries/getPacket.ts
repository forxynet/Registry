import type { PackageDetails } from "../types/packageDetails";

export async function getPackege(name: string): Promise<PackageDetails> { 
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    const data:PackageDetails = await res.json(); 
    
    return data;
}