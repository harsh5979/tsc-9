'use client'

import { Plus, Trash2 } from 'lucide-react'

export default function LinksPage({ link, setLink }) {
    const add = () =>
        setLink([...link, { platform: '', link: '' }])

    const update = (i, key, value) => {
        const copy = [...link]
        copy[i][key] = value
        setLink(copy)
    }

    const remove = (i) =>
        setLink(link.filter((_, index) => index !== i))

    return (
        <div className="col-span-8 bg-white p-6 rounded-xl">

            <button
                onClick={add}
                className="w-full border border-purple-500 rounded-xl py-2 flex gap-2 justify-center"
            >
                <Plus size={16} /> Add new link
            </button>

            <div className="space-y-4 mt-6">
                {link?.map((l, i) => (
                    <div key={i} className="border p-4 rounded-xl">
                        <div className="flex justify-between mb-2">
                            <p className="font-semibold">Link {i + 1}</p>
                            <Trash2
                                size={16}
                                className="cursor-pointer text-red-500"
                                onClick={() => remove(i)}
                            />
                        </div>

                        <input
                            placeholder="Platform"
                            value={l.platform}
                            onChange={(e) =>
                                update(i, 'platform', e.target.value)
                            }
                            className="w-full border rounded-md px-3 py-2 mb-2"
                        />

                        <input
                            placeholder="Link"
                            value={l.link}
                            onChange={(e) =>
                                update(i, 'link', e.target.value)
                            }
                            className="w-full border rounded-md px-3 py-2"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
