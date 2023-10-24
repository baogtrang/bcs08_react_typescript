export interface I_Profile {
    id: number,
    name: string,
    address: string,
}

// tạo interface cho <Card/> props
export interface I_CardProp {
    info : I_Profile;

}