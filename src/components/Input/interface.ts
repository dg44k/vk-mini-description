export interface IInput {
    name: string;
    label: string;
    value: string;
    placeholder: string;
    handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}