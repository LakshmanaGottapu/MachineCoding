import { Dispatch, FormEvent, useCallback, useEffect, useRef } from 'react';
import { debounce } from '../utils';

function Tab({tabName, data, setData, formItems, submitForm=undefined }: {tabName:string, data: Record<string,string | number>, setData: Dispatch<{tabName:string, payLoad:Record<string, string|number>}>, formItems:Array<string>, submitForm?:()=>void }) {
    const formRef = useRef<HTMLFormElement>(null);
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // make api call here...
        console.log(retrieveFormData())
        if(formRef && formRef.current)
            formRef.current.reset();
        setData({tabName, payLoad:{}});
    }
    function retrieveFormData() {
        const formObj: Record<string, string> = {};
        if (formRef && formRef.current) {
            const formData = new FormData(formRef.current);
            [...formData.entries()].forEach(entry => {
                formObj[entry[0]] = entry[1] as string;
            });
        }
        return formObj;
    }
    function handleInputChange() {
        const formData = retrieveFormData();
        setData({tabName,payLoad:formData});
    }
    const DebouncedHandleInputChange = useCallback(debounce(handleInputChange, 600), []);
    useEffect(() => {
        if (formRef.current) {
            const form = formRef.current;
            form.addEventListener('input', DebouncedHandleInputChange)
            return () => form.removeEventListener('input', DebouncedHandleInputChange)
        }
    }, [])
    return (
        <div className="tab">
            <form ref={formRef} onSubmit={submitForm ? submitForm : handleSubmit}>
              {formItems.map(formItem => (<>
                <label htmlFor={formItem}>{formItem}</label>
                <input type="text" name={formItem} defaultValue={data[formItem] || ''} />
              </>))}
              <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Tab

