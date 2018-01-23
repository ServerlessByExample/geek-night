def handler(context)
    times = (context.request.params['times'] || 1).to_i
    return [200, {}, [ "Meow\n" * times ]]
end
