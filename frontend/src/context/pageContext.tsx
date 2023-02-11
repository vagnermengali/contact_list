import { NextRouter, useRouter } from 'next/router';
import { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react';
import { Contacts } from './userContext';

export const Context = createContext<IContext>({} as IContext)

interface IProvider {
    children: ReactNode
}

interface IContext {
    dropDownHiddenContact: boolean;
    setDropDownHiddenContact: Dispatch<SetStateAction<boolean>>;
    dropdownContact: string;
    setDropdownContact: Dispatch<SetStateAction<string>>;
    showDropdownContact: () => void;
    closeDropdownContact: () => void;
    router: NextRouter;
    handleClickdropDownProfile: () => void;
    handleClickdropDownAdd: () => void;
    dropDownProfile: number;
    dropDownAdd: number;
    edit: boolean;
    dropdownContactEdit: string
    handleClickdEdit: () => void;
    dropDownHiddenContactEdit: boolean
    showDropdownContactEdit: (elem: Contacts) => void;
    closeDropdownContactEdit: () => void;
    showDropdownProfile: (elem: Contacts) => void
    closeDropdownProfile: () => void;
    contact: Contacts;
    dropDownHiddenProfile: boolean;
    dropdownProfile: string;
    isSideBarVisible: boolean;
    setIsSideBarVisible: Dispatch<SetStateAction<boolean>>;
    showSideBar: () => void;
}

const Provider = ({ children }: IProvider) => {
    const [dropdownContact, setDropdownContact] = useState<string>('none');
    const [dropDownHiddenContact, setDropDownHiddenContact] = useState<boolean>(false);
    const [dropdownProfile, setDropdownProfile] = useState<string>('none');
    const [dropDownHiddenProfile, setDropDownHiddenProfile] = useState<boolean>(false);
    const [dropdownContactEdit, setDropdownContactEdit] = useState<string>('none');
    const [dropDownHiddenContactEdit, setDropDownHiddenContactEdit] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [dropDownProfile, setDropDownProfile] = useState<number>(0);
    const [dropDownAdd, setDropDownAdd] = useState<number>(0);
    const [contact, setContact] = useState<Contacts>({} as Contacts)
    const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
    const router = useRouter();

    const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);

    const handleClickdEdit = () => {
        if (edit) {
            setEdit(false)
        } else {
            setEdit(true)
        }  
    };

    const showDropdownContact = () => {
        document.body.style.overflow = "hidden";
        setDropdownContact('flex');
        setDropDownHiddenContact(true);
    };

    const closeDropdownContact = () => {
        document.body.style.overflow = 'unset';
        setDropdownContact('none');
        setDropDownHiddenContact(false);
    };

    const showDropdownContactEdit = (elem: Contacts) => {
        document.body.style.overflow = "hidden";
        setDropdownContactEdit('flex');
        setDropDownHiddenContactEdit(true);
        setContact(elem)
    };

    const closeDropdownContactEdit = () => {
        document.body.style.overflow = 'unset';
        setDropdownContactEdit('none');
        setDropDownHiddenContactEdit(false);
    };

    const showDropdownProfile = (elem: Contacts) => {
        document.body.style.overflow = "hidden";
        setDropdownProfile('flex');
        setDropDownHiddenProfile(true);
        setContact(elem)
    };

    const closeDropdownProfile = () => {
        document.body.style.overflow = 'unset';
        setDropdownProfile('none');
        setDropDownHiddenProfile(false);
    };

    const handleClickdropDownProfile = () => {
        if (dropDownProfile === 0) {
            setDropDownProfile(1);
        } else {
            setDropDownProfile(0);
        }
    };

    const handleClickdropDownAdd = () => {
        if (dropDownAdd === 0) {
            setDropDownAdd(1);
        } else {
            setDropDownAdd(0);
        }
    };

    return (
        <Context.Provider
            value={{
                dropdownContact,
                dropDownHiddenContact,
                showDropdownContact,
                closeDropdownContact,
                setDropDownHiddenContact,
                setDropdownContact,
                router,
                handleClickdropDownProfile,
                dropDownProfile,
                edit,
                handleClickdropDownAdd,
                dropDownAdd,
                handleClickdEdit,
                dropDownHiddenContactEdit,
                dropdownContactEdit,
                showDropdownContactEdit,
                closeDropdownContactEdit,
                contact,
                closeDropdownProfile,
                showDropdownProfile,
                dropDownHiddenProfile,
                dropdownProfile,
                setIsSideBarVisible,
                isSideBarVisible,
                showSideBar
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;
